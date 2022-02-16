const root = new Vue (
    {
        el: "#root",
        data: {
            profiloAttivo: 0,
            newMessage: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 16:15',
                        text: 'Tutto fatto!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                        date: '20/03/2020 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent'
                        },
                        {
                        date: '20/03/2020 16:30',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                        },
                        {
                        date: '20/03/2020 16:35',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                        date: '28/03/2020 10:10',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                        },
                        {
                        date: '28/03/2020 10:20',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                        },
                        {
                        date: '28/03/2020 16:15',
                        text: 'Ah scusa!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luigi',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                        }
                    ],
                },
            ]
        },

        computed: {
            filtroNomi() {
              return this.contacts.filter(item => {
                 return item.type.toLowerCase().indexOf(this.search.toLowerCase()) > -1
              })
            }
        },

        // funzioni
        methods: {
            addMessage() {
                if(this.newMessage != '') {
                    this.contacts[this.profiloAttivo].messages.push(
                        {
                            date: dayjs().format('DD/MM/YYYY H:m'),
                            text: this.newMessage,
                            status: 'sent'
                        }
                    ); 
                    this.newMessage = '';
                    setTimeout(this.autoMessage, 1000);
                }
                
            },

            seleziona(indice){
                this.profiloAttivo = indice;
            },

            autoMessage() {          
                this.contacts[this.profiloAttivo].messages.push(
                    {
                        date: dayjs().format('DD/MM/YYYY H:m'),
                        text: 'ok',
                        status: 'received'
                    }
                );         
            },
                 
        }
    }  
);