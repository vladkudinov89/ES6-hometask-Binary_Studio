export class Fighter {

    constructor(name, health, power) {

        this._name = name;
        this._health = health;
        this._power = power;
    }

    get power() {
        return this._power;
    }

    get health() {
        return this._health;
    }

    get name() {
        return this._name;
    }

    set health(value) {
        this._health = value;
    }

    setDamage(damage) {
        this._health -= damage;
        console.log(this._health);
    }

    hit(enemy, point) {
        let damage = 0;
        damage = point * this._power;
        enemy.setDamage(damage);
    }


}