
function unifySmelting(e, ingot, ore, xp) {
    e.remove({input: ore, type: 'minecraft:smelting'});
    e.smelting(ingot, ore).xp(xp).id(`tfm:${ingot}_smelting`);
}

function unifyBlasting(e, ingot, ore, xp) {
    e.remove({input: ore, type: 'minecraft:blasting'});
    e.blasting(ingot, ore).xp(xp).id(`tfm:${ingot}_blasting`);
}

function unifyMacerator(e, raw, ore, amount, eu, duration, id) {
    e.remove({input: ore, type: "modern_industrialization:macerator"})
    e.custom({
        "type": "modern_industrialization:macerator",
        "id": `tfm:mi_macerator_${id}`,
        "item_inputs":[
            Item.of(ore).toJson()
        ],
        "item_outputs":[
            Ingredient.of(raw, amount).toResultJson()
        ],
        "eu": `${eu}`,
        "duration": `${duration}`
     })
}

function addBlasting(e, ingot, ore, xp) {
    e.blasting(ingot, ore).xp(xp).id(`tfm:${ingot}_blasting`);
}

function addSmelting(e, ingot, ore, xp) {
    e.smelting(ingot, ore).xp(xp).id(`tfm:${ingot}_smelting`);s
}