import sys, json, os
sys.stdout.reconfigure(encoding='utf-8')

os.chdir(r'C:\Users\25890\.qclaw\workspace\growth-profile')

print('Checking mapping.js...')
with open('mapping.js', 'r', encoding='utf-8') as f:
    content = f.read()
    if 'const growthMapping' in content and 'hobbies:' in content and 'jobs:' in content:
        print('OK - mapping.js structure looks good')
    else:
        print('WARNING - mapping.js may be incomplete')

print('Checking app.js...')
with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()
    if 'generateHobbyRecommendations' in content and 'generateJobRecommendations' in content:
        print('OK - app.js has new methods')
    else:
        print('WARNING - app.js may be missing new methods')

print('Checking styles.css...')
with open('styles.css', 'r', encoding='utf-8') as f:
    content = f.read()
    if 'hobby-card' in content and 'job-card' in content:
        print('OK - styles.css has new styles')
    else:
        print('WARNING - styles.css may be missing new styles')

print('Checking index.html...')
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()
    if 'mapping.js' in content:
        print('OK - index.html includes mapping.js')
    else:
        print('WARNING - index.html may not include mapping.js')

print('\nAll checks completed!')
