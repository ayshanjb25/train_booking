import React from 'react';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Center,
  Button,
  rem
} from '@mantine/core';
import {
    IconDiscount,
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconUsers
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  // Styles here...
}));

const mockdata = [
    { label: '2 passengers', icon: IconUsers },
    { label: '100km in 3 hrs', icon: IconGauge },
    { label: '25% off', icon: IconDiscount}
  ];

export function PromotionCard() {
  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));


  

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}  >
        <Image src="https://lh3.googleusercontent.com/pw/AM-JKLXiC_7dor9pEUFZiEKIEo4TBJ7-RMMySkHR2kKM1g86uvuevODNKnWVBscbyRP3kmKIT0rteEGHzYHXiMQzrCs-PbqPfdRXmabQXuVmeM-37iMOmYepNZzwO9qaEWaJ_S0SKyGgpqVPiCKocQdz4BPC=w578-h610-no?authuser=2" alt="Ruhunu Devi" />
      </Card.Section>

      <Group position="apart" mt="md" >
        <div>
          <Text fw={500}>Ruhunu Devi</Text>
          <Text fz="xs" c="dimmed">
            Colombo Fort Station - Kandy Fort Station
          </Text>
        </div>
        <Badge variant="outline">25% off</Badge>
      </Group>

      <Card.Section className={classes.section} mt="md" style={{padding:'10px'}}>
        <Text fz="sm" c="dimmed" className={classes.label}>
          Promotion Benefits
        </Text>

        <Group spacing={8} mb={-8}  >
          {features}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}  style={{padding:'10px'}}>
        <Group spacing={30}  >
          <div>
            <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
              LKR 1680.00
            </Text>
            <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
              per person
            </Text>
          </div>

          <Button radius="xl" style={{ flex: 1 }}>
            Buy now
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
