import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty',()=>{
    const cart = new Cart();
    expect(cart.items.length).toBe(0);}
);

test('Should be one item in the Cart',()=>{
    const movie = new Movie(1, 'Мстюки', 'Avengers Assemble', 100, ['фантастика', 'боевик', 'приключения', 'фэнтези'], 137);
    const cart = new Cart();
    cart.add(movie);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].name).toBe('Мстюки');
    }
);
