const issuesContainer = document.getElementById("issuesContainer");
const issueCount = document.getElementById("issueCount");
const buttons = document.querySelectorAll("#btnContener button");
const searchInput = document.getElementById("searchInput");
const loader = document.getElementById("loader");

const modal = document.getElementById("my_modal_3");
const modalContent = document.getElementById("modalContent");

let allIssues = [];

async function loadIssue(){

    loader.classList.remove("hidden");

    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();

    allIssues = data.data;

    displayIssues(allIssues);

    loader.classList.add("hidden");
}

function displayIssues(issues){

    issuesContainer.innerHTML = "";
    issueCount.innerText = issues.length + " Issues";

    issues.forEach(issue =>{

        const div = document.createElement("div");

        const border =
        issue.status === "open"
        ? "border-green-500"
        : "border-purple-500";