export const PRICING_LIST_ITEMS_ENGLISH: PricingItemI[] = [
    {
        age: "5 latki",
        lessonDuration: "2x 30 lub 1x 60min",
        price: "190.00zł"
    },
    {
        age: "6 latki",
        lessonDuration: "2x 60min",
        price: "300.00zł"
    },
    {
        age: "klasa 1-3",
        lessonDuration: "2x 60min",
        price: "300.00zł"
    },
    {
        age: "klasa 4-5",
        lessonDuration: "2x 60min",
        price: "300.00zł"
    },
    {
        age: "klasa 6-8",
        lessonDuration: "2x 90min",
        price: "390.00zł"
    }
]

export const PRICING_LIST_ITEMS_SPANISH: PricingItemI[] = [
{
    age: "5 latki",
    lessonDuration: "1x 50min",
    price: "185.00zł"
},
{
    age: "6 latki",
    lessonDuration: "1x 60min",
    price: "200.00zł"
},
{
    age: "klasa 1-3",
    lessonDuration: "1x 60min",
    price: "200.00zł"
},
{
    age: "klasa 4-5",
    lessonDuration: "1x 90min",
    price: "290.00zł"
},
{
    age: "klasa 6-8",
    lessonDuration: "1x 90min",
    price: "290.00zł"
}
]

export default interface PricingItemI {
    age: string;
    lessonDuration: string;
    price: string;
}