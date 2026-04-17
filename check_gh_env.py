import os, sys
sys.stdout.reconfigure(encoding='utf-8')

search_paths = [
    os.path.expandvars(r'%USERPROFILE%\.netrc'),
    os.path.expandvars(r'%USERPROFILE%\.gitconfig'),
]
for p in search_paths:
    print(f'{p}: exists={os.path.exists(p)}')

token = os.environ.get('GH_TOKEN', os.environ.get('GITHUB_TOKEN', ''))
print(f'GH_TOKEN set: {bool(token)}')

oc_dir = r'C:\Users\25890\.qclaw'
for root, dirs, files in os.walk(oc_dir):
    for f in files:
        if 'github' in f.lower() or 'token' in f.lower() or 'credential' in f.lower():
            print(f'Found: {os.path.join(root, f)}')
