public class Abstracion {

    public static void main(String[] args) {
        GraficObject circle = new Circle();
        ((Circle) circle).draw();
        ((Circle) circle).resize();

        GraficObject rectangle = new Rectangle();
        ((Circle) rectangle).draw();
        ((Circle) rectangle).resize();

    }

}
