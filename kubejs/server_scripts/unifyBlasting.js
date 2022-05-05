onEvent('recipes', e => {
    unifyBlasting(e, 'techreborn:tin_ingot', '#c:tin_ores', 0.5);
})

onEvent('recipes', e => {
    unifyBlasting(e, 'techreborn:silver_ingot', '#c:silver_ores', 0.5);
})

onEvent('recipes', e => {
    unifyBlasting(e, 'techreborn:lead_ingot', '#c:lead_ores', 0.5);
})

onEvent('recipes', e => {
    unifyBlasting(e, 'techreborn:lead_ingot', '#c:raw_lead_ores', 0.5);
})

onEvent('recipes', e => {
    unifyBlasting(e, 'techreborn:silver_ingot', '#c:raw_silver_ores', 0.5);
})

onEvent('recipes', e => {
    unifyBlasting(e, 'techreborn:tin_ingot', '#c:raw_tin_ores', 0.5);
})

onEvent('recipes', e => {
    addBlasting(e, 'techreborn:nickel_ingot', '#c:raw_nickel_ores', 0.5);
})

onEvent('recipes', e => {
    addBlasting(e, 'techreborn:aluminum_ingot', 'techreborn:bauxite_ore', 0.5);
})