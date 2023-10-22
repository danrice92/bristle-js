test('renders the landing page', () => {
  visit('/');
  const heroText = page.getByText('Launch your career with');
  expect(heroText).toBeInTheDocument();
});

test('can navigate to the signup page', async () => {
  const { user } = visit('/');
  const signupButton = page.getByRole('link', { name: 'Sign up' });
  await user.click(signupButton);
});
