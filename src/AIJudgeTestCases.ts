import {getTaskDifficulty} from "src/AIJudge";

const taskBank = [
    { id: 1, description: "Brushing teeth and washing face." },
    { id: 2, description: "60-minute deep-work session on the React frontend." },
    { id: 3, description: "Doing a fast-paced 5K run in 45 minutes." }
];

export async function processTaskBank() {
    console.log("--- Initializing AI Task Scoring (Mock DB) ---");
    console.log(`Target: Local Gamemaster via Cloudflare`);
    console.log(`Task Count: ${taskBank.length}\n`);
    for (const task of taskBank) {
        console.log(`> Processing Task #${task.id}: "${task.description}"`);

        try {
            const result = await getTaskDifficulty(task.description);
        } catch (err) {
            console.error(`!! CONNECTION ERROR for Task #${task.id} !!`);
        }
        console.log("------------------------------------------");
    }

    console.log("\n--- [SCORING COMPLETE] ---\n");
}