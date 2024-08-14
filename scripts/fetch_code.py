import requests
import re
import os

def fetch_github_code(url, start_line=None, end_line=None):
    response = requests.get(url)
    response.raise_for_status()
    lines = response.text.splitlines()
    if start_line and end_line:
        return '\n'.join(lines[start_line-1:end_line])
    return '\n'.join(lines)

def replace_placeholders(md_file):
    with open(md_file, 'r') as file:
        content = file.read()

    # Regex to find all placeholders with GITHUB_CODE pattern
    pattern = r'<!-- GITHUB_CODE: (https://raw.githubusercontent.com/.+?\.py)#L(\d+)-L(\d+) -->'
    matches = re.findall(pattern, content)

    for match in matches:
        url, start_line, end_line = match
        start_line = int(start_line)
        end_line = int(end_line)
        code = fetch_github_code(url, start_line=start_line, end_line=end_line)

        # Replace the placeholder with the fetched code
        replacement_block = f'\n```python\n{code}\n```\n'
        content = re.sub(f'<!-- GITHUB_CODE: {url}#L{start_line}-L{end_line} -->.*<!-- END_GITHUB_CODE -->',
                         f'<!-- GITHUB_CODE: {url}#L{start_line}-L{end_line} -->{replacement_block}<!-- END_GITHUB_CODE -->',
                         content,
                         flags=re.DOTALL)

    with open(md_file, 'w') as file:
        file.write(content)

def process_all_markdown_files():
    # Walk through all directories and subdirectories
    for root, dirs, files in os.walk("."):
        for file in files:
            if file.endswith(".md"):
                md_file_path = os.path.join(root, file)
                print(f"Processing {md_file_path}")
                replace_placeholders(md_file_path)

if __name__ == "__main__":
    process_all_markdown_files()
