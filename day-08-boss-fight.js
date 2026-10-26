const store = {
    name: "TechStore",
    status: "Active",
    finances: {
        revenue: 85000,
        costs: 32000
    },
    analytics: {
        orders: 450,
        returns: null,
        reviews: 120
    },
    categories: ["Electronics", "Gaming"]
};

const newStore = {
    name: "PetStore",
    status: "Active",
    finances: {
        revenue: 42000,
        costs: 18000
    },
    categories: ["Dogs", "Cats"]
};

function createSalesReport(store){
    const {
        name,
        finances: {
            revenue,
            costs
        }
    } = store;
    const profit = revenue - costs;

    const orders = store.analytics?.orders ?? 0;
    const returns = store.analytics?.returns ?? 0;
    const reviews = store.analytics?.reviews ?? 0;

    const totalActivity = orders + reviews


    return {
        name,
        revenue,
        costs,
        profit,
        orders,
        returns,
        reviews,
        totalActivity,
    };
}

function updateStore(store, ...newCategories) {
    const updatedStore = {
        ...store,
        status: "Optimized",
        finances: {
            ...store.finances,
            costs: store.finances.costs + 3000
        },
        categories: [
            ...store.categories,
            ...newCategories
        ]
    };

    return updatedStore;
}

const updatedStore = updateStore(
    store,
    "Computers",
    "Smartphones",
    "Accessories"
);

// 1. Aktualizacja TechStore
const updatedTechStore = updateStore(
    store,
    "Computers",
    "Smartphones",
    "Accessories"
);

// 2. Aktualizacja PetStore
const updatedPetStore = updateStore(
    newStore,
    "Food",
    "Toys"
);


const techReport = createSalesReport(updatedTechStore);
const petReport = createSalesReport(updatedPetStore);


console.log("TechStore Report:", techReport);
console.log("PetStore Report:", petReport);

console.log("Original TechStore:", store);
console.log("Updated TechStore:", updatedTechStore);

console.log("Original PetStore:", newStore);
console.log("Updated PetStore:", updatedPetStore);


console.log(updatedStore);
console.log(store);


console.log(createSalesReport(store));
console.log(createSalesReport(newStore));