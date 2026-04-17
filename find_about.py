import re

content = open(r'C:\Users\25890\.qclaw\workspace\growth-profile\index.html', 'r', encoding='utf-8').read()

# Find the about section
start = content.find('id="about-page"')
if start > 0:
    # Find the end of about page section
    end = content.find('</div>', start + 500)
    end = content.find('</div>', end + 6)  # Second closing div
    about_section = content[start:end+6]
    print(about_section[:2000])
else:
    print("About section not found")
