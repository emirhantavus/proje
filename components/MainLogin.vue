<template>
    <div>
        <div class="d-flex flex-row justify-content-center">
            <div class="row">
                <div class="col-md">
                    <form>
                        <div class="sign-in">Giriş Yap</div>
                        <div class="form-group">
                            <label id="words_1" for="exampleInputEmail1">Email</label>
                            <input v-model="userData.email" type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Email giriniz">
                            <small id="emailHelp" class="form-text text-muted"></small>
                        </div>
                        <div class="form-group">
                            <label id="words_2" for="exampleInputPassword1">Password &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
                                &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Şifrenizimi unuttunuz? </label>
                            <input v-model="userData.password" type="Şifre" class="form-control" id="exampleInputPassword1"
                                placeholder="Şifre">
                            <div class="form-group">
                                <button @click="loginToHome(userData)" type="button" class="btn btn-warning" id="sign-in">Giriş Yap</button>
                                <p>Oturum açarak, Amazon'un Kullanım ve Satış Koşulları'nı kabul etmiş olursunuz. Kişisel verilerinizin Amazon tarafından nasıl işlendiğine ilişkin detaylı bilgi için Gizlilik Bildirimi, Çerez Bildirimi ve İlgi Alanına Dayalı Tanıtımları inceleyebilirsiniz.</p>
                                
                                 <a href="^#">Yardımamı ihtiyacınız var?</a>
                               

                            </div>
                        </div>
                        <div class="form-check">


                        </div>
                        <router-link to="SignUpPage"><button type="button" class="btn btn-warning"
                                id="grey-button">Amazon Hesabınızı Oluşturun!</button></router-link>

                    </form>
                </div>
            </div>
        </div>
    </div>
   
</template>

<script>

import CryptoJs from "crypto-js"
import { mapSetters } from "vuex"
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase"
import { del } from "vue";

export default {

  data() {
    return {
      userData: {
        email: " ",
        password: null
      },
      alertMessage: null,
      alert: false,
      saltKey: "ra2nd3om!key&"
    }

  },
  methods: {


    async loginToHome(userData) {

      const data = {
        ...userData
      }
      data.password = CryptoJs.SHA256(data.password, this.saltKey).toString()

      const docRef = doc(db, "users", data.email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        if (data.password !== docSnap.data().password) {
          this.alertMessage = "Wrong password!"
          this.alert = true
        } else {
          data = docSnap.data()
          delete data.password
          this.$store.commit('setUserData',data)
          this.$store.commit('setLogin', true)
          // user.userId = docSnap.data().userId,
          // user.basket = docSnap.data().basket
          this.$router.push({ path: '/' })

        }
      } else {
        this.alertMessage = "There is not such an user"
          this.alert = true
      }


    }


  },



}


</script>