# Generated by Django 5.0.3 on 2024-04-13 22:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0037_alter_bookrent_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='bookrent',
            options={'managed': True},
        ),
        migrations.AlterModelOptions(
            name='seatbook',
            options={'managed': True},
        ),
    ]
