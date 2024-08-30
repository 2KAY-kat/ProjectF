export const deliveryOptions = [{
    id: '1',
    deliveryDays: 7,
    dollar: 0
}, {
    id: '2',
    deliveryDays: 3,
    dollar: 50
}, {
    id: '3',
    deliveryDays: 1,
    dollar: 90
}];

export function getDeliveryOption(deliveryOptionId) {
    
    let deliveryOption;

    deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId) {
            deliveryOption = option;
        }
    });

    return deliveryOption || deliveryOptions[0];
}