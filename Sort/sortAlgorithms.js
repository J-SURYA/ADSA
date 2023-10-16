function bubbleSort(array) {
    const steps = [];
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                // Swap elements
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                steps.push([...array]); // Record the current state
            }
        }
    }

    return steps;
}

function insertionSort(arr) {
    const steps = [];
    for (let i = 1; i < arr.length; i++) {
        
        let currentElement = arr[i];
        let j = i - 1; 

        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
            steps.push([...arr]);
        }

        arr[j + 1] = currentElement;
    }
    return steps;
}

function selectionSort(arr) {
    const steps = [];
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            // Swap arr[i] and arr[minIndex]
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        steps.push([...arr]);
    }
    return steps;
}

module.exports = {
    bubble: bubbleSort,
    selection: selectionSort,
    insertion: insertionSort,
};
