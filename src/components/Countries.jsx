import { useCountries, useCreateCountry, useUpdateCountry, useDeleteCountry } from "../hooks";


export default function Countries() {

    // example 
    let country = {
        id: 1,
        name: "USA",
        capital: "Washington D.C.",
        population: 331449281
    }


    const { isLoading, isError, data: countries } = useCountries();
    const { mutate } = useCreateCountry();
    const { mutate: updateCountry } = useUpdateCountry();
    const { mutate: deleteCountry } = useDeleteCountry();



    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {isError.message}</p>;

    if (!countries) return null;

    return (
        <div>
            <h1>Countries</h1>
            <button
                onClick={() => {
                    mutate(country);
                }}
            >
                Add Country
            </button>
            <button
                onClick={() => {
                    updateCountry(country);
                }}
            >
                Update Country
            </button>
            <button
                onClick={() => {
                    deleteCountry(country.id);
                }}
            >
                Delete Country
            </button>
            <ul>
                {countries.map((country) => (
                    <li key={country.cca3}>
                        <img src={country.flags.png} alt="" />
                        {country.name.common}
                    </li>
                ))}
            </ul>



        </div>
    );
}