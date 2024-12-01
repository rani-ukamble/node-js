function InventoryListManager() {
    let inventory = []; // User-maintained inventory list

    return {
        /**
         * Adds an item to the inventory list.
         * @param {string} name - The name of the item to add.
         */
        add(name) {
            inventory.push(name);
        },

        /**
         * Removes an item from the inventory list.
         * @param {string} name - The name of the item to remove.
         */
        remove(name) {
            const index = inventory.indexOf(name);
            if (index !== -1) {
                inventory.splice(index, 1);
            }
        },

        /**
         * Returns the sorted inventory list or "EMPTY" if the inventory is empty.
         * @returns {string} - Sorted inventory list or "EMPTY".
         */
        getList() {
            if (inventory.length === 0) return "EMPTY";
            return inventory.sort().join(",");
        },
    };
}

// Sample Test Case
function main() {
    const input = [
        "5", // Number of operations to perform
        "ADD shirt",
        "ADD trouser",
        "GETLIST",
        "REMOVE shirt",
        "GETLIST",
    ];

    const operationsCount = parseInt(input[0], 10); // First input line gives the number of operations
    const manager = InventoryListManager();

    for (let i = 1; i <= operationsCount; i++) {
        const [operation, name] = input[i].split(" ");

        if (operation === "ADD") {
            manager.add(name);
        } else if (operation === "REMOVE") {
            manager.remove(name);
        } else if (operation === "GETLIST") {
            console.log(manager.getList());
        }
    }
}

// Run the main function
main();
