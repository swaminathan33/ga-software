import socket 
import threading 

PORT = 5050 
HEADERS = 64
FORMAT = 'utf-8'
SERVER = '192.168.0.20'
ADDR = (SERVER, PORT)
DISCONNECT_MESSAGE = "!DISCONNECT"

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(ADDR)

def send(msg):
    message = msg.encode(FORMAT)
    msg_length = len(message)
    send_length = str(msg_length).encode(FORMAT)
    send_length += b' ' * (HEADERS - len(send_length))
    client.send(send_length)
    client.send(message)

send('hello ')
input()
send('bye')
#send(DISCONNECT_MESSAGE)