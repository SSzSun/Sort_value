import { merge } from './src/merge';

describe('Sort', () => {

    test('เลขไม่ซ้ำ', () => {
        const collection_1 = [3, 7, 12];
        const collection_2 = [15, 8, 1];
        const collection_3 = [4, 9, 10];

        const return_collection = [1, 3, 4, 7, 8, 9, 10, 12, 15];
        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual(return_collection);
    });

    test('เลขซ้ำกัน', () => {
        const collection_1 = [3, 7, 7, 12];
        const collection_2 = [15, 8, 1, 0];
        const collection_3 = [4, 9, 9, 10];

        const return_collection = [0, 1, 3, 4, 7, 7, 8, 9, 9, 10, 12, 15];
        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual(return_collection);
    });

    test('กรณีมี Array มีค่าน้อยกว่า 0', () => {
        const collection_1 = [-12, -7, -7,-3];
        const collection_2 = [15, 2, 0, -8];
        const collection_3 = [-9, 4, 8, 10];

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([]);
    });
    
    test('กรณีมี Array มีค่าว่าง', () => {
        const collection_1 = [3, 7, 7, 12];
        const collection_2 : number[] = [];
        const collection_3 = [4, 9, 9, 10];

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([]);
    });
});
