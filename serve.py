import os, sys, http.server, socketserver, webbrowser, threading, time
sys.stdout.reconfigure(encoding='utf-8')

PORT = 8765
os.chdir(r'C:\Users\25890\.qclaw\workspace\growth-profile')

class Handler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        print(f'{self.address_string()} - {format % args}')

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f'Serving at http://localhost:{PORT}')
    print('Press Ctrl+C to stop')
    threading.Thread(target=lambda: (time.sleep(1), webbrowser.open(f'http://localhost:{PORT}')), daemon=True).start()
    httpd.serve_forever()
