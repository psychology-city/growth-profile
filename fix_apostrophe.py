lines = open(r'C:\Users\25890\.qclaw\workspace\growth-profile\create_hobby_mapping.py', 'rb').read().split(b'\n')
line = lines[243]
# U+2019 right single quotation mark = e2 80 99
# Replace it with regular apostrophe ' = 27
corrupt = b'\xe2\x80\x99'
fixed = b'\x27'
if corrupt in line:
    new_line = line.replace(corrupt, fixed)
    lines[243] = new_line
    open(r'C:\Users\25890\.qclaw\workspace\growth-profile\create_hobby_mapping.py', 'wb').write(b'\n'.join(lines))
    print('Fixed! New end:', new_line[-60:].decode('utf-8'))
else:
    print('Not found')
