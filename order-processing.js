
const orders = [
    {
        id: 101,
        customer: "Anna",
        status: "paid",
        items: [
            { price: 120, quantity: 2 },
            { price: 80, quantity: 1 }
        ]
    },
    {
        id: 102,
        customer: "Kamil",
        status: "pending",
        items: [
            { price: 200, quantity: 2 }
        ]
    },
    {
        id: 103,
        customer: "Ola",
        status: "paid",
        items: [
            { price: 250, quantity: 2 },
            { price: 100, quantity: 1 }
        ]
    },
    {
        id: 104,
        customer: "Piotr",
        status: "paid",
        items: [
            { price: 90, quantity: 1 },
            { price: 70, quantity: 2 }
        ]
    },
    {
        id: 105,
        customer: "Maja",
        status: "cancelled",
        items: [
            { price: 800, quantity: 1 }
        ]
    },
    {
        id: 106,
        customer: "Robert",
        status: "paid",
        items: [
            { price: 500, quantity: 1 }
        ]
    },
    {
        id: 107,
        customer: "Julia",
        status: "paid",
        items: []
    }
];

function isEligible(order) {
    return order.status === "paid" && order.items.length > 0;
}

function calculateSubtotal(order) {
    let subtotal = 0;
    for (const item of order.items)
        subtotal += item.price * item.quantity;
    return subtotal;
}

function applyDiscount(subtotal) {
    if (subtotal >= 500) {
        return subtotal * 0.90;
    }

    return subtotal;
}

function calculateFinalPrice(order) {
    const subtotal = calculateSubtotal(order);
    const discountPrice = applyDiscount(subtotal);
    let delivery = 0;
    if (discountPrice >= 300)
        delivery = 0;
    else
        delivery = 20;
    return discountPrice + delivery;
}

function createOrderEntry(order) {
    const finalPrice = calculateFinalPrice(order);
    return {
        id: order.id,
        customer: order.customer,
        total: finalPrice
    };
}

function generateOrderReport(orders) {
    const orderEligible = orders
        .filter(isEligible)
        .map(createOrderEntry);
    let totalRevenue = 0;
    for (const order of orderEligible) {
        totalRevenue += order.total;
    }
    return {
        ordersCount: orderEligible.length,
        totalRevenue: totalRevenue,
        processedOrders: orderEligible
    };
}
const report = generateOrderReport(orders);

console.log(report);