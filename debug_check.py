lines = open(r'C:\Users\25890\.qclaw\workspace\growth-profile\create_hobby_mapping.py', 'rb').read().split(b'\n')
line = lines[243]
text = line.decode('utf-8')
print('Full text:')
print(text)
print()
print('Quote chars found:')
special = set(['\u0027', '\u0022', '\u2018', '\u2019', '\u201c', '\u201d', '\u300c', '\u300d'])
for i, c in enumerate(text):
    if c in special:
        print(f'  pos {i}: U+{ord(c):04X} = {repr(c)}')
