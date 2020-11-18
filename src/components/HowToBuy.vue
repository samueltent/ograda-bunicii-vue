<template>
  <div id="app">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <v-img :src="require('../assets/logo2.png')" contain height="150" />
        </v-col>
        <v-col cols="12">
          <div class="text-lg-h4 text-sm-h4 font-italic font-weight-black my-3">
            Cum cumpar?
          </div>
        </v-col>
        <v-col justify="start">
          <div class="text-caption">
            Cumpararea produselor din magazinul nostru o puteti face online,
            telefonic, What's App sau prin mesaje pe Facebook. <br />
            <strong> Comanda online </strong>
            <br />
            Produsul pe care doriti sa il comandati poate fi gasit fie prin
            utilizarea meniului din partea de sus a paginii ce contine
            categoriile de produse sau prin folosirea campului de cautare. In
            momentul in care ati apasat ,,Adauga in cos'' produsul va fi automat
            transferat in cosul de cumparaturi.
            <br />
            Dupa adaugarea in cos a tuturor produselor pe care doriti sa le
            comandati, procesul de cumparare se continua prin apasarea butonului
            si parcurgerea paginii de comanda. In pagina de comanda va trebui sa
            completati urmatoarele:

            <ul>
              <li>
                Metoda de livrare - produsele vor fi livrate de curierii Ograda
                Bunicii.
              </li>
              <li>
                Datele comenzii: Numar de telefon,Nume si prenume, Adresa
                complete (Localitate, Strada, Numar, Scara, Bloc, etaj,
                Apartament, Interfon daca e cazul).
              </li>
              <li>Metoda de plata: plata numerar la livrarea coletului.</li>
            </ul>
            <br />
            <strong>Comanda telefonica</strong>
            Telefonand la 0769281093 iar un agent de vanzari
            va va prelua comanda.
            <br>
            <strong>Comanda What's App 0769 281 093 / Facebook
            Messenger - OgradaBunicii.ro</strong>
            <ul>
                <li>
                    Datele comenzii: Nume si prenume, Adresa
            complete (Localitate, Strada, Numar, Scara, Bloc, etaj, Apartament,
            Interfon daca e cazul).
                </li>
                <li>
                    Precizati produsele dorite: Denumirea
            produslui, Codul de produs sau link-ul produsului.
                </li>
            </ul>
            <br>
            <strong>Cum platesc?</strong> <br>
            Se poate plati cash
            la livrare
            <br> <strong> sau </strong> <br>
            Online cu card bancar prin EuPlatesc
            (Visa/Maestro/Mastercard).
            <p class="font-italic">Plata cu cardul nu este momentan disponibila</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HowToBuy",
  components: {},
  computed: {},
};
</script>

<style scoped>
</style>