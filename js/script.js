var app = new Vue(
    {
        el: '#root',
        data: {
            objectName: {
                helloVue: 'Hello Vue.js',
                name: 'Lucio Ghedina',
                age: 22,
            },
            bonusObject: {
                img: 'https://i2.wp.com/www.linkiesta.it/wp-content/uploads/2020/02/dd998222-599c-4aa4-a8b4-49f0feaf1268_large.jpg?fit=1200%2C874&ssl=1',
                imgName: 'scimmie'
            }
        },
        methods: {
            changeMonkeyPic() {
                if (this.bonusObject.img === 'https://i2.wp.com/www.linkiesta.it/wp-content/uploads/2020/02/dd998222-599c-4aa4-a8b4-49f0feaf1268_large.jpg?fit=1200%2C874&ssl=1') {
                    this.bonusObject.img = 'https://media.npr.org/assets/img/2017/09/12/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8-s1100-c50.jpg'
                } else if(this.bonusObject.img === 'https://media.npr.org/assets/img/2017/09/12/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8-s1100-c50.jpg') {
                    this.bonusObject.img = 'https://i.guim.co.uk/img/media/be689c4825a590000e352fbe2a81f3279bcae62e/0_371_5568_3341/master/5568.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=b2d707501c4b7bee2ed65e3cbfe61b1d'
                } else if(this.bonusObject.img === 'https://i.guim.co.uk/img/media/be689c4825a590000e352fbe2a81f3279bcae62e/0_371_5568_3341/master/5568.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=b2d707501c4b7bee2ed65e3cbfe61b1d') {
                    this.bonusObject.img = 'https://media.gettyimages.com/photos/portrait-of-monkey-closeup-monkey-have-a-rest-fooling-around-eating-picture-id1213641943?s=612x612'
                } else if(this.bonusObject.img === 'https://media.gettyimages.com/photos/portrait-of-monkey-closeup-monkey-have-a-rest-fooling-around-eating-picture-id1213641943?s=612x612') {
                    this.bonusObject.img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnQn-j5_IBQy8XOw-1fug94SOtzDeR-l_arQ&usqp=CAU'
                } else if(this.bonusObject.img === 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnQn-j5_IBQy8XOw-1fug94SOtzDeR-l_arQ&usqp=CAU') {
                    this.bonusObject.img = 'https://i2.wp.com/www.linkiesta.it/wp-content/uploads/2020/02/dd998222-599c-4aa4-a8b4-49f0feaf1268_large.jpg?fit=1200%2C874&ssl=1'
                }       
            }
        }
    }
);