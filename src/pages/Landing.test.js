test('renders the landing page', () => {
  visit('/');
  const heroText = page.getByRole('heading', {
    name: 'Launch your career with'
  });
  expect(heroText).toBeInTheDocument();
});

test('can navigate to the signup page', async () => {
  visit('/');
  const signupButton = page.getByRole('link', { name: 'Sign up' });
  await navigate(signupButton);
  const label = page.getByRole('heading', { name: 'Sign up' });
  expect(label).toBeInTheDocument();
});
