import Circle from "./Circle.js";
import * as THREE from "../moduls/three.module.js";

export default class Orbit{
    constructor(){
        this.geometry = new THREE.Object3D();
        this.perimetr = [];
        this.poligons = Orbit.poligons.map(poligon => poligon.map(point => [-point[0], point[2], point[1]]));
    }
    static DELTA = 0.07;
    static PLANETS_RADIUS = 0.15;

    static poligons = 
    [
        [
            [3.163603127538115, 0.5499539355585038, 2.3851972497457674] ,
            [3.419108654743652, -0.758160230430332, 1.9325861098670039] ,
            [3.7280368415105847, -1.1066214712705364, 0.9365523090905359] ,
            [3.9682431149967177, -0.4480618692312385, 0.2286638179121417] ,
            [3.93560692037587, 0.6772820879570064, 0.2286638179121417] ,
            [3.1093236388119387, 1.0829419696477054, -2.271418763570653] ,
            [2.944592722111845, 1.8502028453795978, -1.9763914419555644] ,
            [3.038851017099678, 2.5831048138744497, -0.30488361125337204] ,
            [2.4372083720173623, 3.073113748965487, 0.7848485441712743] ,
            [2.8904619943940064, 2.665843732747806, 0.7338301244382566] ,
            [2.889610722231701, 1.828782713778016, 2.075018954070131] ,
            [3.163603127538115, 0.5499539355585038, 2.3851972497457674] 
        ],
        [
            [1.2975895378096978, 0.5802726067008177, 3.7389229857379322] ,
            [2.083557064535672, 0.1865985002422482, 3.4093945149440885] ,
            [2.4489293831933976, 0.3046399831278228, 3.1480056157529144] ,
            [3.0411827725659424, -0.5365429979858991, 2.542307801026546] ,
            [3.179478593219312, 0.04711800932211046, 2.4266635054035954] ,
            [2.8231511725347396, 1.1417023045878358, 2.5935175543486397] ,
            [2.5666342048262814, 1.9529914410670017, 2.3660543716776243] ,
            [1.3909804438730449, 3.4341938168161756, 1.5071450604717167] ,
            [0.7750681367883043, 3.9041898141189, 0.395690887771927] ,
            [0.004114936096613915, 3.718262041428718, 1.4746221409470508] ,
            [-1.1601819203025063, 3.7769506643158155, 0.6233952126279998] ,
            [-0.9389793596737926, 3.6298096052073845, 1.3938436038705364] ,
            [-1.8780166080749627, 3.030012831306843, 1.8144078543454607] ,
            [-1.7643997492641188, 2.5334580221510543, 2.54332144543217] ,
            [-1.7246455141033996, 1.6285312741673634, 3.220789303841815] ,
            [-1.397579367483316, 0.0649845292278694, 3.747338912154326] ,
            [-0.17842160809611632, 0.9406066438728822, 3.8837385173652703] ,
            [1.2975895378096978, 0.5802726067008177, 3.7389229857379322]
        ],
        [
            [-1.2855136658717758, -0.4495693439951157, 3.761029383000977] ,
            [-2.0014032787337395, -0.7574106538785396, 3.3794546922935838] ,
            [-1.571928509088884, -1.2522450830680405, 3.4584567388136453] ,
            [-1.4295403228507668, -2.1553052783643416, 3.051405188171268] ,
            [-1.3077156134746895, -3.4797890082043397, 1.4768034170649718] ,
            [0.7496015064398348, -3.8960250370544505, 0.5090053950480272] ,
            [-0.421390400184687, -3.7281098354374853, 1.3869488763276299] ,
            [0.3149333132606219, -3.46398531556632, 1.975252576694837] ,
            [0.5812631133678952, -3.5368482335987315, 1.7756232048290517] ,
            [1.3720207386565955, -2.035415000204485, 3.158266117609279] ,
            [0.1526257718592745, -1.4702498044775312, 3.7168630437773924] ,
            [-1.2855136658717758, -0.4495693439951157, 3.761029383000977]
        ],
        [
            [0.852562935267705, -3.8730549462148507, 0.5220936937067849] ,
            [0.6256129577247744, -3.9412921950195, -0.27354023580678444] ,
            [1.1710646859524059, -3.608121626892482, -1.2688836931988448] ,
            [1.1131171474483306, -3.24018346882254, -2.064505099152246] ,
            [0.7221425129966108, -2.0009765338914525, -3.3874183535162423] ,
            [1.8233828921320436, -2.6506823942119344, -2.3767956735266647] ,
            [3.2836033434194567, -2.2415408763406535, -0.43982221724071485] ,
            [1.8107781846416353, -3.5020818824257796, 0.6756514299630071] ,
            [0.852562935267705, -3.8730549462148507, 0.5220936937067849]
        ],
        [
            [-2.80937328662194, 2.7240817441922665, -0.8287342079179918] ,
            [-2.1512191446227162, 3.1959713622826578, -1.076114883865957] ,
            [-1.8996402432335469, 3.2657095256292985, -1.3139666055504053] ,
            [-1.4322531293507041, 3.373435978020973, -1.6026792179531113] ,
            [-1.4201653096948053, 2.890029603738311, -2.3729431899343143] ,
            [-2.4201648174604014, 2.35824281750646, -2.140442260376592] ,
            [-2.4816286577611892, 1.5405020376894658, -2.7328323543263684] ,
            [-3.2240915906454917, 1.641110934402498, -1.7064548971811653] ,
            [-3.0105774776942797, 2.3610527569874846, -1.1669846312277412] ,
            [-2.80937328662194, 2.7240817441922665, -0.8287342079179918] 
        ]
    ]

    #generateCoordinate(angle, position, r){
        const deltax = Math.random() * Orbit.DELTA;
        const x  = r * Math.cos((angle + deltax) * position);
        const z = Math.sqrt(r*r - x*x);

        return {x, z};
    }

    #generateShere(angle, position, h, r, part){
        const {x, z} = this.#generateCoordinate(angle, position, r);
        this.perimetr.push(new Circle(x, h, part*z, Orbit.PLANETS_RADIUS));
        this.geometry.add(this.perimetr[this.perimetr.length - 1].getModels());
    }

    #groupBy(key) {
        return function group(array) {
          return array.reduce((acc, obj) => {
            const property = obj[key];
            acc[property] = acc[property] || [];
            acc[property].push(obj);
            return acc;
          }, {});
        };
      }
      

    /*
    #generateGossamer(COUNT_SHERE_LINE){
        const material = new THREE.LineDashedMaterial( { color: 0x0000ff, linewidth: 100 } );
        
        const groupPoint = this.#groupBy("y")(
            this.perimetr
            .map(el => el.geometry.position)
            .filter(el => el.x !== 0 || el.z !== 0)
        );

        const keys = Object
        .keys(groupPoint)
        .map(key => parseFloat(key))
        .sort((a, b) => a-b)
        .map(key=>key.toString());

        const pointVertical = [];
        for(let i = 0; i < COUNT_SHERE_LINE; ++i){
            pointVertical.push([]);
        }

        keys.forEach(y => {
            const pointsHorizontal = [];
            groupPoint[y].forEach((g, index) => {
                pointVertical[index].push(g);
                pointsHorizontal.push(g);
            })

            pointsHorizontal.push(pointsHorizontal[0]);
            const geometry = new THREE.BufferGeometry().setFromPoints( pointsHorizontal );
            const line = new THREE.Line( geometry, material );
            this.geometry.add( line );
        })
        pointVertical.forEach(vertical => {
            const geometry = new THREE.BufferGeometry().setFromPoints( vertical );
            const line = new THREE.Line( geometry, material );
            this.geometry.add( line );
        })
    }
    */

    #generateGossamer(COUNT_SHERE_LINE){
        const material = new THREE.LineDashedMaterial( { color: 0x0000ff, linewidth: 35 } );
        let geometry, line
        this.poligons.forEach(
            poligon => {
            geometry = new THREE.BufferGeometry().setFromPoints( poligon.map(point => new THREE.Vector3(...point)));
            line = new THREE.Line( geometry, material );
            this.geometry.add( line );
        })
    }

    /*
    generate(COUNT_SHERE_LINE, R){
        let angle = 2*Math.PI / COUNT_SHERE_LINE;
        for(let j = 1; j < COUNT_SHERE_LINE / 2; ++j){
                let h = (COUNT_SHERE_LINE / 2) * Math.cos(angle * j / 2);
                let r = (COUNT_SHERE_LINE / 2) * Math.sin(angle * j / 2);
                for(let i = 0; i < COUNT_SHERE_LINE / 2; ++i){
                   this.#generateShere(angle, i, h, r, 1)
                   this.#generateShere(angle, i, -h, r, 1)
                }

                for(let i = COUNT_SHERE_LINE / 2; i < COUNT_SHERE_LINE; ++i){
                    this.#generateShere(angle, i, h, r, -1)
                    this.#generateShere(angle, i, -h, r, -1)
                }
        }

        let h = 0;
        let r = (COUNT_SHERE_LINE / 2);
        for(let i = 0; i < COUNT_SHERE_LINE; ++i){
                this.perimetr.push(new Circle(r * Math.cos(angle * i), h, r * Math.sin(angle * i), Orbit.PLANETS_RADIUS));
                this.geometry.add(this.perimetr[this.perimetr.length - 1].getModels());
        }

        this.perimetr.push(new Circle(0, COUNT_SHERE_LINE / 2, 0, Orbit.PLANETS_RADIUS));
        this.geometry.add(this.perimetr[this.perimetr.length - 1].getModels());
        this.perimetr.push(new Circle(0, -COUNT_SHERE_LINE / 2, 0, Orbit.PLANETS_RADIUS));
        this.geometry.add(this.perimetr[this.perimetr.length - 1].getModels());

        this.#generateGossamer(COUNT_SHERE_LINE);
    }
    */

    generate(){
        

        this.poligons.forEach(poligon => {
            poligon.forEach(point => {
                this.perimetr.push(new Circle(point[0], point[1], point[2], Orbit.PLANETS_RADIUS));
                this.geometry.add(this.perimetr[this.perimetr.length - 1].getModels());
            })
        })

        this.#generateGossamer(0);
    }

    getModels(){
        return this.geometry;
    }

    rotation(x, y){
        this.geometry.rotation.y += x;
        this.geometry.rotation.x += y;
    }
}