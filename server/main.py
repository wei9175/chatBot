import cohere
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

co = cohere.Client("B46mampmv7YaDnr870gbUmRyAjGpPTKSJNai3bfk") 

@app.route('/api/chat', methods=['POST'])
def handle_message():
    user_input = request.json.get('message')
    # print(user_input)
    response = co.chat(
        message=user_input,
        model="command-r-plus",
        preamble="Be more specific"
        # preamble="You are an expert on geography, be more specific"
    )

    # print(response)
    return jsonify(answer=response.text)

if __name__ == '__main__':
    app.run(port=3001)