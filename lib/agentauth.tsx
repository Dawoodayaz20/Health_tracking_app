
export default async function handleResponse (question: string) {
    try {
        const response = await fetch('https://medical-assistant-jade.vercel.app/medicalAssistant',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({question})
        })
        if(!response.ok){
            throw new Error(`Server error: ${response.status}`)
        }

        const reply = await response.json();
        return reply
    }
    catch(error){
        console.log("Error calling agent:", error)
    }
}