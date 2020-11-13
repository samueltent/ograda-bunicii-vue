<template>
    <section>
        <h1>Produse disponibile in Oradea</h1>
        <div class="product-list">
            <div class="product">Lorem ipsum dolor sit amet consectetur.</div>
            <div class="product">Lorem ipsum dolor sit amet.</div>
            <div class="product">Lorem ipsum dolor sit amet.</div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'component2'
}
</script>

<style scoped>

section {
    padding: 2vw;
    text-align: left;
}

section h1 {
    line-height: 5vw;
}

.product-list {
    display: flex;
    padding: 3vw;
}

.product {
    justify-content: space-between;
    width: 33%;
}

</style>