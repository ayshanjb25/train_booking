import { PasswordInput, Text, Group, Anchor } from '@mantine/core';

export function ForgotPasswordInput({ className, style,title, ...others }) {
  return (
    <div className={className} style={style}>
      <Group position="apart" mb={5}>
        <Text component="label" htmlFor="your-password" size="sm" weight={500}>
          {title}
        </Text>

        <Anchor
          href="#"
          onClick={(event) => event.preventDefault()}
          sx={(theme) => ({
            paddingTop: 2,
            color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
            fontWeight: 500,
            fontSize: theme.fontSizes.xs,
          })}
        >
          Forgot your password?
        </Anchor>
      </Group>
      <PasswordInput placeholder="Your password" id="your-password" required {...others} />
    </div>
  );
}

