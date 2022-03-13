public abstract class GraficObject {
    int x, y;

    GraficObject() {
        System.out.print("base abstract class");

    }

    void moveTo(int newX, int nweY) {
        System.out.println("move to x:" + x + "and y:" + y);
    }

    abstract void draw();

    abstract void resize();

}
