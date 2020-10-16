import '@testing-library/jest-dom'

describe('Pruebas de prueba', () => {
	
	test('should be true', () => {
		
		const msg1 = 'Hola mundo'
		const msg2 = `Hola mundo`
	
		expect( msg1 ).toBe( msg2 )
	})
})


