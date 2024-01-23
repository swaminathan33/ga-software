import socket
import sys

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

ip = socket.gethostbyname("www.github.com")

port = 80

s.connect((ip, port))
