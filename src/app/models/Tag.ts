export class Tag {
    static readonly SPRING = new Tag('Spring Boot', 'green');
    static readonly JAVA = new Tag('Java', 'goldenrod');
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly PYTHON = new Tag('Python', '#ffd343');
    static readonly LR = new Tag('Linear Regression', 'purple');
    static readonly OPENCV = new Tag('OpenCV', 'blue');
    static readonly ML = new Tag('Machine Learning', 'brown');
    private constructor(private readonly key: string,public readonly color:string) {

    }

    toString() {
        return this.key;
    }
}
