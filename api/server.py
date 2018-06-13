from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from os import environ
import json

app = Flask(__name__)
app.debug = True
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/orders')
def get_orders():
    pp = int(request.args.get('pp'))
    page = int(request.args.get('page'))
    last = page*pp
    first = last-pp
    with open('./orders.json', 'r') as f:
        all_orders = json.load(f)
    print "all_orders[%s:%s]" % (first,last)
    orders = all_orders[first:] if last > len(all_orders) else all_orders[first:last]
    print "orders: %s" % (orders)
    return jsonify({
        "success": True,
        "orders": orders,
        "total": len(all_orders)
    })

@app.route('/orders/update_status', methods=['POST'])
def update_order_status():
    index = int(request.get_json().get('index'))
    status = str(request.get_json().get('status'))
    with open('./orders.json', 'r') as f:
        orders = json.load(f)
    orders[index]['status'] = status
    with open('./orders.json', 'w') as f:
        json.dump(orders, f)
    return jsonify({
        'success': True
    })

if __name__ == '__main__':
    port = int(environ.get('PORT', 8888))
    app.run(host="0.0.0.0", port=port)