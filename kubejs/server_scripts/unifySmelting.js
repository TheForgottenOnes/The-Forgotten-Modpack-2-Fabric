// priority: 0
settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

onEvent('recipes', e => {
    unifySmelting(e, 'techreborn:tin_ingot', '#c:tin_ores', 0.5);
})

onEvent('recipes', e => {
    unifySmelting(e, 'techreborn:silver_ingot', '#c:silver_ores', 0.5);
})

onEvent('recipes', e => {
    unifySmelting(e, 'techreborn:lead_ingot', '#c:lead_ores', 0.5);
})

onEvent('recipes', e => {
    unifySmelting(e, 'techreborn:tin_ingot', '#c:raw_tin_ores', 0.5);
})

onEvent('recipes', e => {
    unifySmelting(e, 'techreborn:lead_ingot', '#c:raw_lead_ores', 0.5);
})

onEvent('recipes', e => {
    unifySmelting(e, 'techreborn:silver_ingot', '#c:raw_silver_ores', 0.5);
})

onEvent('recipes', e => {
    addSmelting(e, 'techreborn:nickel_ingot', '#c:raw_nickel_ores', 0.5);
})

onEvent('recipes', e => {
    addSmelting(e, 'techreborn:nickel_ingot', '#c:nickel_ores', 0.5);
})

onEvent('recipes', e => {
    addSmelting(e, 'techreborn:aluminum_ingot', 'techreborn:bauxite_ore', 0.5);
})