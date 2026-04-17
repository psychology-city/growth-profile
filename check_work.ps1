import sys, os
sys.path.insert(0, r'C:\Users\25890\.qclaw\workspace\growth-profile')
try:
    import openpyxl
    wb = openpyxl.load_workbook(r'C:\Users\25890\Desktop\工作需求表_个人成长名片.xlsx')
    ws = wb.active
    rows = list(ws.iter_rows(values_only=True))
    print(len(rows), 'rows loaded')
    if len(rows) > 1:
        print('Headers:', rows[1])
        for r in rows[2:8]:
            print(r)
except Exception as e:
    print('Error:', e)
