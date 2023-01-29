
<template>

<div>
    
    <div class="first">
        <div class="flex logo">
            <router-link to="/"><a ><img src="logo.png" alt=""> </a></router-link>          
            <div class="map flex">
                <i class="fas fa-map-marker"></i>
                <div>
                    <span>alıcı</span>
                    <span>Türkiye</span>
                </div>
            </div>
        </div>

        <div class="flex input">
            <div>
                <span>Tüm Kategoriler</span>
                <i class="fas fa-caret-down"></i>

            </div>
            <input type="text">
            <i class="fas fa-search"></i>
        </div>
        <div class="flex right">
            
            <div class="sign">
                <router-link to="LoginPage">giriş yapın</router-link>
                <div class="flex ac">
                    <span>  </span>
                    <i class="fas fa-caret-down"></i>
                </div>
            </div>
            <div class="sign">
                <span>returns</span>
                <span>orders</span>
            </div>
            <div class="flex cart">
                <i class="fas fa-shopping-cart"></i>                
                <router-link to="basket"><span class="ca">cart</span></router-link>
                <p>0</p>
            </div>
        </div>
    </div>
    
</div>


</template>
<script>

</script>