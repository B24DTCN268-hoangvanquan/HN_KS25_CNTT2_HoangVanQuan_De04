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


function validateProductCode(code) {
    if (!code) return "Mã không được để trống!";
    code = code.trim();
    if (code.length < 6) return "Mã tối thiểu 6 ký tự!";
    if (!code.startsWith("PRD-")) return "Mã phải bắt đầu bằng 'PRD-'!";
    if (code.includes(" ")) return "Không chứa khoảng trắng!";
    if (findProductIndex(code) !== -1) return "Mã đã tồn tại!";
    return "";
}

function findProductIndex(code) {
    if (!code) return -1;
    return products.findIndex(item => item.productCode === code.trim());
}

function normalizeText(rawText) {
    if (!rawText) return "";
}

function inputIntegerInRange(message, min, max) {
    let num = +prompt(message);
    if (num < min || num > max) {
        console.log("Giá trị không hợp lệ!");
    }
    return num;
}

function displayProducts(list) {
    if (list.length === 0) {
        console.log("Danh sách sản phẩm trống!");
    } else {
        list.forEach((item, index) => {
            console.log(`${index + 1}. ${item.productCode} - ${item.productName} - ${item.brand} | Tồn: ${item.stockQuantity} | BH: ${item.warrantyMonths} tháng`);
        });
        console.log(`Tổng: ${list.length} sản phẩm`);
    }
}

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
            displayProducts(products);
            break;

        case 2:
            let productCode = prompt("Nhập mã sản phẩm:");
            let err = validateProductCode(productCode);
            if (err) {
                console.log(err);
                break;
            }
            let productName = normalizeText(prompt("Nhập tên sản phẩm:"));
            let brand = normalizeText(prompt("Nhập hãng sản xuất:"));
            let stockQuantity = +prompt("Nhập số lượng tồn kho:");
            let warrantyMonths = +prompt("Nhập thời gian bảo hành (tháng):");

            products.push({ productCode, productName, brand, stockQuantity, warrantyMonths });
            console.log("Thêm sản phẩm thành công!");
            break;

        case 3:
            let updateCode = prompt("Nhập mã sản phẩm cần cập nhật:");
            let updateIndex = findProductIndex(updateCode);

            if (updateIndex === -1) {
                console.log("Không tìm thấy sản phẩm!");
            } else {
                products[updateIndex].stockQuantity = +prompt("Nhập số lượng tồn kho mới:");
                products[updateIndex].warrantyMonths = +prompt("Nhập số tháng bảo hành mới:");
                console.log("Cập nhật thành công!");
            }
            break;

        case 4:
            let deleteCode = prompt("Nhập mã sản phẩm cần xóa:");
            let deleteIndex = findProductIndex(deleteCode);

            if (deleteIndex === -1) {
                console.log("Không tìm thấy sản phẩm!");
            } else {
                products.splice(deleteIndex, 1);
                console.log("Xóa sản phẩm thành công!");
            }
            break;
        case 5:
            let searchBrand = prompt("Nhập hãng sản xuất cần tìm:");

            break;
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