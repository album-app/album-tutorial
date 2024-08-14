import os
import glob
import requests

def fetch_github_code(url):
    # Extract line number range from the URL if present
    if "#L" in url:
        base_url, line_info = url.split("#L")
        line_range = line_info.split('-')
        start_line = int(line_range[0])
        end_line = int(line_range[1][1:]) if len(line_range) > 1 else start_line
    else:
        base_url = url
        start_line, end_line = None, None

    response = requests.get(base_url)
    if response.status_code == 200:
        code_lines = response.text.splitlines()
        if start_line and end_line:
            # Adjust for 0-based indexing in Python
            return "\n".join(code_lines[start_line-1:end_line])
        else:
            return response.text
    else:
        raise Exception(f"Failed to fetch code from GitHub. Status code: {response.status_code}")

    
def replace_github_code_block(file_path):
    with open(file_path, 'r') as file:
        lines = file.readlines()

    new_lines = []
    inside_code_block = False

    for line in lines:
        if '<!-- GITHUB_CODE:' in line:
            inside_code_block = True
            url = line.split('<!-- GITHUB_CODE: ')[1].split(' -->')[0].strip()
            code = fetch_github_code(url)
            new_lines.append(line)
            new_lines.append("```python\n")
            new_lines.extend(code.splitlines(True))
            new_lines.append("```\n")
        elif '<!-- END GITHUB_CODE -->' in line:
            inside_code_block = False
            new_lines.append(line)
        elif not inside_code_block:
            new_lines.append(line)

    with open(file_path, 'w') as file:
        file.writelines(new_lines)

def process_directory(directory):
    # Use glob to find all .md files recursively
    md_files = glob.glob(os.path.join(directory, '**', '*.md'), recursive=True)

    for md_file in md_files:
        print(f"Processing file: {md_file}")
        replace_github_code_block(md_file)

if __name__ == "__main__":
    directory = '.'  # Directory to start the search from (current directory by default)
    process_directory(directory)
