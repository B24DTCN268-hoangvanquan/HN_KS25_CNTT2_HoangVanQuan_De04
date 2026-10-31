let products = [
    {
        productCode: "PRD-001",
        productName: "Điện Thoại NoVa X1",
        brand: "NoVa Mobile",
        stockQuantity: 120,
        warrantyMonths: 12
    },
    {
        productCode: "PRD-002",
        productName: "Máy tính bảng NoVa Tab",
        brand: "NoVa Mobile",
        stockQuantity: 35,
        warrantyMonths: 24
    },
    {
        productCode: "PRD-003",
        productName: "Tai nghe Sky Buds",
        brand: "Bluesky Audio",
        stockQuantity: 80,
        warrantyMonths: 6
    },
];

while (true) {
    console.log("===========================================");
    console.log("Hệ thống quản lý sản phẩm cửa hàng TECHZONE");
    console.log("===========================================");
    console.log("1. Hiển thị danh sách sản phẩm.");
    console.log("2. Thêm sản phẩm mới.");
    console.log("3. Cập nhật thông tin sản phẩm.");
    console.log("4. Xoá sản phẩm.");
    console.log("5. Tìm kiếm sản phẩm theo hãng sản xuất.");
    console.log("0. Thoát chương trình.");

    let choice = +prompt("Mời nhập lựa chọn:");

    switch (choice) {
        case 1:
            if (products.length === 0) {
                console.log("Danh sách sản phẩm trống!");
            } else {
                console.table(products);
            }
            break;
        case 2:
            let productCode = prompt("Nhập mã sản phẩm:");
            let productName = prompt("Nhập tên sản phẩm:");
            let brand = prompt("Nhập hãng sản xuất:");
            let stockQuantity = +prompt("Nhập số lượng tồn kho:");
            let warrantyMonths = +prompt("Nhập thời gian bảo hành (tháng):");

            let newProduct = {
                productCode,
                productName,
                brand,
                stockQuantity,
                warrantyMonths
            };

            products.push(newProduct);
            console.log("Thêm sản phẩm thành công!");
            break;

        case 3:
            let updateCode = prompt("Nhập mã sản phẩm cần cập nhật:");

            let updateIndex = products.findIndex(
                item => item.productCode === updateCode
            );

            if (updateIndex === -1) {
                console.log("Không tìm thấy sản phẩm!");
            } else {
                products[updateIndex].productName = prompt("Nhập tên mới:");
                products[updateIndex].brand = prompt("Nhập hãng mới:");
                products[updateIndex].stockQuantity =
                    +prompt("Nhập số lượng tồn kho mới:");

                products[updateIndex].warrantyMonths =
                    +prompt("Nhập số tháng bảo hành mới:");

                console.log("Cập nhật thành công!");
            }
            break;

        case 4:
            let deleteCode = prompt("Nhập mã sản phẩm cần xóa:");
            let deleteIndex = products.findIndex(
                item => item.productCode === deleteCode
            );

            if (deleteIndex === -1) {
                console.log("Không tìm thấy sản phẩm!");
            } else {
                products.splice(deleteIndex, 1);
                console.log("Xóa sản phẩm thành công!");
            }
            break;

        case 5:
            let searchBrand = prompt("Nhập hãng sản xuất cần tìm:");


        case 0:
            console.log("Thoát chương trình!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng nhập lại.");
            break;
    }

    if (choice === 0) {
        break;
    }
}