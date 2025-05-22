"use strict";
(() => {
    console.log("------ Comprobación de Clases ------");
    // Clase Manager
    class Manager {
        constructor(name, id, phoneNo, location) {
            this.name = name;
            this.id = id;
            this.phoneNo = phoneNo;
            this.location = location;
        }
        purchaseInventory() { }
        recordComplaints() { }
        manageStaff() { }
    }
    // Clase Inventory
    class Inventory {
        constructor(type, status) {
            this.type = type;
            this.status = status;
        }
    }
    // Clase Guest
    class Guest {
        constructor(name, id, phoneNo, address, roomNo) {
            this.name = name;
            this.id = id;
            this.phoneNo = phoneNo;
            this.address = address;
            this.roomNo = roomNo;
        }
        checkIn() { }
        checkOut() { }
        payBill() { }
        orderFood() { }
        submitFeedback() { }
    }
    // Clase Receptionist
    class Receptionist {
        constructor(name, id, phoneNo, location) {
            this.name = name;
            this.id = id;
            this.phoneNo = phoneNo;
            this.location = location;
        }
        checkRoomAvailability() { }
        bookRoom() { }
        generateBill() { }
        acceptCustomerFeedback() { }
    }
    // Clase Rooms
    class Rooms {
        constructor(roomNo, location) {
            this.roomNo = roomNo;
            this.location = location;
        }
    }
    // Clase Bill
    class Bill {
        constructor(billNo, guestName) {
            this.billNo = billNo;
            this.guestName = guestName;
        }
    }
    // Clase Chef
    class Chef {
        constructor(name, id, location) {
            this.name = name;
            this.id = id;
            this.location = location;
        }
        takeOrders() { }
    }
    // Clase FoodItems
    class FoodItems {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
    }
    // Clase Housekeeping
    class Housekeeping {
        constructor(name, id, location) {
            this.name = name;
            this.id = id;
            this.location = location;
        }
        cleanRoom() { }
    }
    // -------- Comprobación con console.log --------
    const manager = new Manager("Laura", 1, 1234567890, "Oficina Central");
    console.log("Manager:");
    console.log("  Nombre: " + manager.name);
    console.log("  ID: " + manager.id);
    console.log("  Teléfono: " + manager.phoneNo);
    console.log("  Ubicación: " + manager.location);
    const inventory = new Inventory("Limpieza", "Disponible");
    console.log("Inventory:");
    console.log("  Tipo: " + inventory.type);
    console.log("  Estado: " + inventory.status);
    const guest = new Guest("Carlos", 101, 5566778899, "Av. Reforma 123", 305);
    console.log("Guest:");
    console.log("  Nombre: " + guest.name);
    console.log("  ID: " + guest.id);
    console.log("  Teléfono: " + guest.phoneNo);
    console.log("  Dirección: " + guest.address);
    console.log("  No. de habitación: " + guest.roomNo);
    const receptionist = new Receptionist("Ana", 5, 9988776655, "Lobby");
    console.log("Receptionist:");
    console.log("  Nombre: " + receptionist.name);
    console.log("  ID: " + receptionist.id);
    console.log("  Teléfono: " + receptionist.phoneNo);
    console.log("  Ubicación: " + receptionist.location);
    const room = new Rooms(305, "3er Piso");
    console.log("Room:");
    console.log("  Número de habitación: " + room.roomNo);
    console.log("  Ubicación: " + room.location);
    const bill = new Bill(9001, "Carlos");
    console.log("Bill:");
    console.log("  Número de factura: " + bill.billNo);
    console.log("  Nombre del huésped: " + bill.guestName);
    const chef = new Chef("Mario", 7, "Cocina");
    console.log("Chef:");
    console.log("  Nombre: " + chef.name);
    console.log("  ID: " + chef.id);
    console.log("  Ubicación: " + chef.location);
    const foodItem = new FoodItems(301, "Pizza");
    console.log("Food Item:");
    console.log("  ID: " + foodItem.id);
    console.log("  Nombre: " + foodItem.name);
    const housekeeping = new Housekeeping("Luz", 9, "Pasillo Norte");
    console.log("Housekeeping:");
    console.log("  Nombre: " + housekeeping.name);
    console.log("  ID: " + housekeeping.id);
    console.log("  Ubicación: " + housekeeping.location);
})();
