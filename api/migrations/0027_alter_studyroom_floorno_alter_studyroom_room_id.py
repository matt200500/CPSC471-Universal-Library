# Generated by Django 5.0.3 on 2024-04-13 07:21

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0026_rename_floor_no_studyroom_floorno_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studyroom',
            name='floorno',
            field=models.ForeignKey(db_column='FloorNo', on_delete=django.db.models.deletion.DO_NOTHING, to='api.floor'),
        ),
        migrations.AlterField(
            model_name='studyroom',
            name='room_id',
            field=models.IntegerField(db_column='Room_ID', primary_key=True, serialize=False, unique=True),
        ),
    ]
