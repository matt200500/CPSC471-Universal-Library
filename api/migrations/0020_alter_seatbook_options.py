# Generated by Django 5.0.3 on 2024-04-12 07:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0019_alter_seat_floorno_alter_seat_seat_num_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='seatbook',
            options={'managed': True},
        ),
    ]
