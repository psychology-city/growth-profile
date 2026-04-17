New-Item -Path "$HOME\Desktop\兴趣爱好" -ItemType Directory -Force
Set-Location "C:\Users\25890\.qclaw\workspace\growth-profile"
python create_hobby_requirements.py
python create_hobby_impact.py
python create_hobby_mapping.py
