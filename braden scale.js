<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Braden Scale Calculator</title>
<style>
    body {
        font-family: Arial, sans-serif;
        margin: 20px;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }
    th, td {
        border: 1px solid #ccc;
        padding: 8px;
        text-align: left;
    }
    th {
        background-color: #f2f2f2;
    }
    .score {
        font-weight: bold;
    }
</style>
</head>
<body>
<h2>Braden Scale Calculator</h2>

<form id="bradenForm">
    <div>
        <label for="sensoryScore">Sensory Perception Score (1-4):</label>
        <select id="sensoryScore">
            <option value="4">4 - No Impairment</option>
            <option value="3">3 - Slightly Limited</option>
            <option value="2">2 - Very Limited</option>
            <option value="1">1 - Completely Limited</option>
        </select>
    </div>
    <div>
        <label for="moistureScore">Moisture Score (1-4):</label>
        <select id="moistureScore">
            <option value="4">4 - Rarely Moist</option>
            <option value="3">3 - Occasionally Moist</option>
            <option value="2">2 - Often Moist</option>
            <option value="1">1 - Constantly Moist</option>
        </select>
    </div>
    <div>
        <label for="activityScore">Activity Score (1-4):</label>
        <select id="activityScore">
            <option value="4">4 - Walks Frequently</option>
            <option value="3">3 - Walks Occasionally</option>
            <option value="2">2 - Chairfast</option>
            <option value="1">1 - Bedfast</option>
        </select>
    </div>
    <div>
        <label for="mobilityScore">Mobility Score (1-4):</label>
        <select id="mobilityScore">
            <option value="4">4 - No Limitations</option>
            <option value="3">3 - Slightly Limited</option>
            <option value="2">2 - Very Limited</option>
            <option value="1">1 - Completely Immobile</option>
        </select>
    </div>
    <div>
        <label for="nutritionScore">Nutrition Score (1-4):</label>
        <select id="nutritionScore">
            <option value="4">4 - Excellent</option>
            <option value="3">3 - Adequate</option>
            <option value="2">2 - Probably Inadequate</option>
            <option value="1">1 - Very Poor</option>
        </select>
    </div>
    <div>
        <label for="frictionScore">Friction and Shear Score (1-3):</label>
        <select id="frictionScore">
            <option value="3">3 - No Apparent Problem</option>
            <option value="2">2 - Potential Problem</option>
            <option value="1">1 - Problem</option>
        </select>
    </div>
    
    <button type="button" onclick="calculate()">Calculate</button>
</form>

<div id="output" style="margin-top: 20px;">
    <!-- Results will be displayed here -->
</div>

<script>
function calculate() {
    // Get scores from dropdown selections
    let sensoryScore = parseInt(document.getElementById('sensoryScore').value);
    let moistureScore = parseInt(document.getElementById('moistureScore').value);
    let activityScore = parseInt(document.getElementById('activityScore').value);
    let mobilityScore = parseInt(document.getElementById('mobilityScore').value);
    let nutritionScore = parseInt(document.getElementById('nutritionScore').value);
    let frictionScore = parseInt(document.getElementById('frictionScore').value);

    // Calculate total Braden Score
    let totalScore = sensoryScore + moistureScore + activityScore + mobilityScore + nutritionScore + frictionScore;

    // Example interventions
    let sensoryInterventions = getInterventions('sensory', sensoryScore);
    let moistureInterventions = getInterventions('moisture', moistureScore);
    let activityInterventions = getInterventions('activity', activityScore);
    let mobilityInterventions = getInterventions('mobility', mobilityScore);
    let nutritionInterventions = getInterventions('nutrition', nutritionScore);
    let frictionInterventions = getInterventions('friction', frictionScore);

    // Display results in HTML
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <h3>Total Braden Score: ${totalScore}</h3>
        
        <h3>Interventions</h3>
        <h4>Sensory Perception:</h4>
        <ul>
            ${sensoryInterventions.map(intervention => `<li>${intervention}</li>`).join('')}
        </ul>
        <h4>Moisture:</h4>
        <ul>
            ${moistureInterventions.map(intervention => `<li>${intervention}</li>`).join('')}
        </ul>
        <h4>Activity:</h4>
        <ul>
            ${activityInterventions.map(intervention => `<li>${intervention}</li>`).join('')}
        </ul>
        <h4>Mobility:</h4>
        <ul>
            ${mobilityInterventions.map(intervention => `<li>${intervention}</li>`).join('')}
        </ul>
        <h4>Nutrition:</h4>
        <ul>
            ${nutritionInterventions.map(intervention => `<li>${intervention}</li>`).join('')}
        </ul>
        <h4>Friction and Shear:</h4>
        <ul>
            ${frictionInterventions.map(intervention => `<li>${intervention}</li>`).join('')}
        </ul>
    `;
}

function getInterventions(category, score) {
    // Placeholder function for retrieving interventions based on category and score
    let interventions = [];
    // Example interventions (replace with actual data from your backend)
    if (category === 'sensory') {
        switch (score) {
            case 4:
                interventions = [
                    "Encourage patient to report pain over bony prominences.",
                    "Assess and inspect skin every shift, pay attention to bony prominences areas.",
                    "esp. heels, elbows, sacral and all medical device related areas e.g. nose bridge for Bipap and Cpap etc.",
                    "Make sure all tubings e.g. Foley, SCD tubing; monitor cables and medical trash e.g. needle cap, Curos are not beneath patients.",
                    "Make sure the bed is free winkle."
                ];
                break;
            case 3:
                interventions = [
                    "Assess and inspect skin every shift, pay attention to bony prominences areas.",
                    "esp. heels, elbows, sacral and all medical device related areas e.g. nose bridge for Bipap and Cpap etc.",
                    "Make sure all tubings e.g. Foley, SCD tubing; monitor cables and medical trash e.g. needle cap, Curos are not beneath patients.",
                    "Make sure the bed is free winkle.",
                    "Apply Mepilex foams and elevate heels with pillows. Or, apply Mepilex with heel protectors.",
                    "Apply Z-flo pillows for the occipital."
                ];
                break;
            case 2:
                interventions = [
                    "Assess and inspect skin every shift, pay attention to bony prominences areas.",
                    "esp. heels, elbows, sacral and all medical device related areas e.g. nose bridge for Bipap and Cpap etc.",
                    "Make sure all tubings e.g. Foley, SCD tubing; monitor cables and medical trash e.g. needle cap, Curos are not beneath patients.",
                    "Make sure the bed is free winkle.",
                    "Apply Mepilex foams and elevate heels with pillows. Or, apply Mepilex with heel protectors.",
                    "Apply Z-flo pillows for the occipital.",
                    "Consider specialty mattress e.g. low air loss mattress to minimize moisture-associated skin damage; air fluidized therapy bed aka Sand bed.",
                    "Contact WOCN if you have any questions related to mattress selection for a pressure injury patient."
                ];
                break;
            case 1:
                interventions = [
                    "Assess and inspect skin every shift, pay attention to bony prominences areas.",
                    "esp. heels, elbows, sacral and all medical device related areas e.g. nose bridge for Bipap and Cpap etc.",
                    "Make sure all tubings e.g. Foley, SCD tubing; monitor cables and medical trash e.g. needle cap, Curos are not beneath patients.",
                    "Make sure the bed is free winkle.",
                    "Apply Mepilex foams and elevate heels with pillows. Or, apply Mepilex with heel protectors.",
                    "Apply Z-flo pillows for the occipital.",
                    "Consider specialty mattress e.g. low air loss mattress to minimize moisture-associated skin damage; air fluidized therapy bed aka Sand bed.",
                    "Contact WOCN if any question related to mattress selection for pressure injury patient.",
                    "Use pillows between knees and bony prominences to avoid direct contact."
                ];
                break;
            default:
                interventions = [];
        }
    } else if (category === 'moisture') {
        switch (score) {
            case 4:
                interventions = [
                    "Encourage the patient to use lotion to prevent skin cracks.E.g. Medline Remedy Lotion Purple is for moisturization.",
                    "Medline Remedy Lotion Blue is for after every incontinence cleanup on intact skin.",
                    "Encourage the patient to report any moisture problem (such as groin area etc).",
                    "Keep linen and layers less than 4 (including bedsheet)."
                ];
                break;
            case 3:
                interventions = [
                    "Encourage the patient to use lotion to prevent skin cracks.E.g. Medline Remedy Lotion Purple is for moisturization.",
                    "Medline Remedy Lotion Blue is for after every incontinence cleanup on intact skin.",
                    "Encourage the patient to report any moisture problem (such as groin area etc).",
                    "Keep linen and layers less than 4 (including bedsheet).",
                    "Use moisture barrier ointments.E.g. Medline Remedy Lotion Orange -zinc cream is for Open/ Denuded Skin.",
                    "If using zinc oxide paste, do not scrub the paste completely off with the next cleaning. Gently soak stool off top then apply new paste covered dressing to area.",
                    "Apply fungal powder/ fungal cream for the folds",
                    "Avoid using adult diapers. Instead, use Mesh underwear if necessary ",
                    "Check incontinence pads frequently (every 2-3 hours) and change prn",
                    "For urine incontinence, consider purewick.",
                    "For stool incontinence, consider the request order from MD for rectal tubing. Not suitable for a low platelet count patient."
                ];
                break;
            case 2:
                interventions = [
                    "Encourage the patient to use lotion to prevent skin cracks.E.g. Medline Remedy Lotion Purple is for moisturization.",
                    "Medline Remedy Lotion Blue is for after every incontinence cleanup on intact skin.",
                    "Encourage the patient to report any moisture problem (such as groin area).",
                    "Keep linen and layers less than 4 (including bedsheet).",
                    "Use moisture barrier ointments.E.g. Medline Remedy Lotion Orange -zinc cream is for Open/ Denuded Skin.",
                    "If using zinc oxide paste, do not scrub the paste completely off with the next cleaning. Gently soak stool off top then apply new paste covered dressing to area.",
                    "Apply fungal powder/ fungal cream for the folds",
                    "Avoid using adult diapers. Instead, use Mesh underwear if necessary ",
                    "Check incontinence pads frequently (every 2-3 hours) and change prn",
                    "For urine incontinence, consider purewick.",
                    "For stool incontinence, consider the request order from MD for rectal tubing. Not suitable for low platelet count patient.",
                    "Consider specialty mattresses e.g. low air loss mattresses to minimize moisture-associated skin damage."
                ];
                break;
            case 1:
                interventions = [
                   "Encourage the patient to use lotion to prevent skin cracks.E.g. Medline Remedy Lotion Purple is for moisturization.",
                   "Medline Remedy Lotion Blue is for after every incontinence cleanup on intact skin.",
                    "Encourage the patient to report any moisture problem (such as groin area).",
                    "Keep linen and layers less than 4 (including bedsheet).",
                    "Use moisture barrier ointments.E.g. Medline Remedy Lotion Orange -zinc cream is for Open/ Denuded Skin.",
                    "If using zinc oxide paste, do not scrub the paste completely off with the next cleaning. Gently soak stool off top then apply new paste covered dressing to area.",
                    "Apply fungal powder/ fungal cream for the folds",
                    "Avoid using adult diapers. Instead, use Mesh underwear if necessary ",
                    "Check incontinence pads frequently (every 2-3 hours) and change prn",
                    "For urine incontinence, consider purewick.",
                    "For stool incontinence, consider the request order from MD for rectal tubing. Not suitable for low platelet count patient.",
                    "Consider specialty mattresses e.g. low air loss mattresses to minimize moisture-associated skin damage."
                ];
                break;
            default:
                interventions = [];
        }
    } else if (category === 'activity') {
        switch (score) {
            case 4:
                interventions = [
                    "Encourage ambulation outside the room.",
                    "Check skin daily.",
                    "Monitor balance and endurance."
                ];
                break;
            case 3:
                interventions = [
                    "Provide a structured mobility plan. For sacral injury patient, chair sitting is limited to 3 times per day for 1 hour or less.",
                    "Apply chair cushion.",
                    "Consult PT/OT."
                ];
                break;
            case 2:
                interventions = [
                    "Consult PT/OT.",
                    "Consider specialty chair e.g. CAD chair.",
                    "Provide a structured mobility plan. For sacral injury patient, chair sitting is limited to 3 times per day for 1 hour or less.",
                    "Apply chair cushion.",
                    "Consider postural alignment, weight distribution, balance, stability, and pressure relief when positioning individuals in chairs or wheelchairs.",
                    "Reposition patient q15 minutes when in the chair.",
                    
                ];
                break;
            case 1:
                interventions = [
                    "Position patient q2h with wedges and CHARTING q2H on EPIC!!",
                    "Elevate head of bed no more than 30 degrees.",
                    "Position with pillows to elevate pressure points off the bed.",
                    "Consult PT/OT for conditioning and specialty chair- CAD assessment.",
                    "Consider specialty mattress e.g. low air loss mattress to minimize moisture-associated skin damage; air fluidized therapy bed aka Sand bed.",
                    "Contact WOCN if you have any questions related to mattress selection for a pressure injury patient."
                    
                ];
                break;
            default:
                interventions = [];
        }
    } else if (category === 'mobility') {
        switch (score) {
            case 4:
                interventions = [
                    "Check skin daily.",
                    "Encourage ambulation outside the room at least twice daily."
                ];
                break;
            case 3:
                interventions = [
                    "Check skin daily.",
                    "Turn/reposition frequently.",
                    "Educate patient frequent small shifts of body weight.",
                    "Consult Pt/OT for strengthening/ conditioning.",
                    "Use gait belt for assistance"
                ];
                break;
            case 2:
                interventions = [
                    "Perform skin assessment and inspection every shift.",
                    "Turn/reposition 1-2 hours with wedges and pillows and CHART IN EPIC q2H!!",
                    "Post turning schedule.",
                    "Educate patient frequent small shifts of body weight.",
                    "Elevate head of bed no more than 30 degrees.",
                    "Position with pillows to elevate pressure points off the bed",
                    "If using Mepilex foam on heels, need to use pillows elevate the heels as well or use Mepilex with heel protectors",
                    "Consider specialty mattress e.g. low air loss mattress to minimize moisture-associated skin damage; air fluidized therapy bed aka Sand bed.",
                    "Contact WOCN if you have any questions related to mattress selection for a pressure injury patient."
                ];
                break;
            case 1:
                interventions = [
                    "Perform skin assessment and inspection every shift.",
                    "Turn/reposition 1-2 hours with wedges and pillows and CHART IN EPIC q2H!!",
                    "Post turning schedule.",
                    "Educate patient frequent small shifts of body weight.",
                    "Elevate head of bed no more than 30 degrees.",
                    "Position with pillows to elevate pressure points off the bed",
                    "If using Mepilex foam on heels, need to use pillows elevate the heels as well or use Mepilex with heel protectors",
                    "Consider specialty mattress e.g. low air loss mattress to minimize moisture-associated skin damage; air fluidized therapy bed aka Sand bed.",
                    "Contact WOCN if you have any questions related to mattress selection for a pressure injury patient."
                ];
                break;
            default:
                interventions = [];
        }
    } else if (category === 'nutrition') {
        switch (score) {
            case 4:
                interventions = [
                    "Move the patient out of bed for all meals.",
                    "Provide food choices.",
                    "Offer nutrition supplements.",
                    "Discussion a plan with provider if the patient is NPO for > than 24 hours",
                    "Record I/O and dietary intake."
                ];
                break;
            case 3:
                interventions = [
                    "Move the patient out of bed for all meals.",
                    "Provide food choices.",
                    "Offer nutrition supplements.",
                    "Discussion a plan with provider if the patient is NPO for > than 24 hours",
                    "Record I/O and dietary intake."
                ];
                break;
            case 2:
                interventions = [
                    "Move the patient out of bed for all meals.",
                    "Provide food choices.",
                    "Offer nutrition supplements.",
                    "Discussion a plan with provider if the patient is NPO for > than 24 hours",
                    "Record I/O and dietary intake.",
                    "Encourage fluid intake as appropriate.",
                    "**Nursing Driven: Obtain nutritional/dietary consult."
                ];
                break;
            case 1:
                interventions = [
                    "Move the patient out of bed for all meals.",
                    "Provide food choices.",
                    "Offer nutrition supplements.",
                    "Discussion a plan with provider if the patient is NPO for > than 24 hours",
                    "Record I/O and dietary intake.",
                    "Encourage fluid intake as appropriate.",
                    "**Nursing Driven: Obtain nutritional/dietary consult.",
                    "Perform skin assessment and inspection every shift."
                ];
                break;
            default:
                interventions = [];
        }
    } else if (category === 'friction') {
        switch (score) {
            case 3:
                interventions = [
                    "Keep bed linens clean, dry, and wrinkle free."
                ];
                break;
            case 2:
                interventions = [
                    "Keep bed linens clean, dry, and wrinkle free.",
                    "Avoid massaging pressure points.",
                    "Apply Mepilex foam or heel protectors to intact skin over sacral, elbows, heels."
                ];
                break;
            case 1:
                interventions = [
                    "Keep bed linens clean, dry, and wrinkle free.",
                    "Avoid massaging pressure points.",
                    "Apply Mepilex foam or heel protectors to intact skin over sacral, elbows, heels.",
                    "Perform skin assessment and inspection every shift.",
                    "Use a minimum of two people assisting plus a draw sheet in pulling the patient up in bed.",
                    "Elevate the head of the bed 30 degrees or less to reduce shear when feasible."
                ];
                break;
            default:
                interventions = [];
        }
    }

    return interventions;
}
</script>
</body>
</html>
