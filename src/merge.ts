function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {

    function check_array(collection_array: number[]): boolean {
        // ตรวจสอบว่า array มีค่าข้างในไหม
        if (collection_array.length === 0) {
            return false;
        }
        // ตรวจสอบว่า array ว่ามีค่าน้อยกว่า 0 
        return collection_array.every(val => val >= 0);
    }

    // ถ้าไม่มีค่าใน array ให้ return array เป็นค่าว่าง
    if (!check_array(collection_1) || !check_array(collection_2) || !check_array(collection_3)) { 
        return [];
    }

    // รวม array ทั้ง 2 อัน
    function merge_Array(left: number[], right: number[]): number[] {
        let result: number[] = [];
        let array_left = 0;
        let array_right = 0;

        while (array_left < left.length && array_right < right.length) { // วนลูปเพื่อเปรียบเทียบค่าใน array ซ้ายและขวา
            if (left[array_left] < right[array_right]) {
                result.push(left[array_left]);
                array_left++;
            } else {
                result.push(right[array_right]);
                array_right++;
            }
        }

        // ใส่ค่าที่เหลือใน array ซ้าย
        while (array_left < left.length) {
            result.push(left[array_left]);
            array_left++;
        }

        // ใส่ค่าที่เหลือใน array ขวา
        while (array_right < right.length) {
            result.push(right[array_right]);
            array_right++;
        }

        return result;
    }

    function merge_Sort(collection_array: number[]): number[] { // ใช้ merge sort เพื่อเรียงลำดับ array
        if (collection_array.length <= 1) {
            return collection_array;
        }

        // หาร array ออกเป็น 2 ส่วน แล้วค่อยรวม array 2 ส่วนเข้าด้วยกััน
        const middle = Math.floor(collection_array.length / 2); 
        const left = collection_array.slice(0, middle); 
        const right = collection_array.slice(middle);

        return merge_Array(merge_Sort(left), merge_Sort(right));
    }

    // รวม array 2 ( collection_1,collection_2 ) และค่อยรวม collection_3
    const mergedArray = merge_Array(merge_Array(collection_1, collection_2), collection_3); 
    return merge_Sort(mergedArray);
}

export { merge };